import React, { useRef, useState } from 'react';
import Share from 'react-native-share';
import { TouchableOpacity, Text, View } from 'react-native';
import { useDeck } from '../../hooks';
import Canvas, {Image as CanvasImage,} from 'react-native-canvas';

const altoCarta = 150;
const anchoCarta = 100;
const posXCardCount = 80;


export const BtnShareCards = ({ tipoOperacion,message='', cards, titlePrompt='' }) => {
  const base64 = useRef('')
  const { saveCardsBuy, saveCardsSell } = useDeck()
  const [loadingCard, setLoadingCard] = useState(false)

  const shareMessage = () => {
    shareImages(message);
    switch (tipoOperacion) {
      case 'compra': saveCardsBuy(cards)
        break;
      case 'Venta': saveCardsSell(cards)
        break;
      default:
        break;
    }
  };

  const handleCanvas = async (canvas) => {
    // evita el error de que solamente puede haber 1 instancia de imagen
    if (!(canvas instanceof Canvas)) {
      return;
    }

    // el contenedor donde se dibujaran las cartas para compartirse, siempre se tomara en cuenta que las columnas maximas seran 5 e ira escalando la altura si el total de cards es multiplo de 5
    canvas.width = cards.length > 4 ? 500 : cards.length*100;
    // canvas.height = Math.ceil(cards.length/5)*150;
    canvas.height = Math.ceil(cards.length/5)*250;
    
    const context = canvas.getContext('2d');

    // setea la maxima cantidad de columnas antes de pasar a la sigiente fila... tambien un contador de la fila y columna actual para no pisar las imagenes porque se ira actualizando en el foreach
    const maxColumnas = 5;
    let currentRow = 0;
    let currentColumn = 0;

    cards.forEach((currentValue, index) => {
      // por cada nueva imagense hace una nueva instancia para poder tener distintos image.src y no se pisen cuando canvas este dibujando
      const image = new CanvasImage(canvas);
      image.crossOrigin = 'true';
      image.src = currentValue.imgUrl;
      
      image.addEventListener('load', async () => {
        context.strokeStyle = 'magenta';
        context.font = "25px Arial"
        // revisa si se llego al limite de columnas para dibujar y mientras no llege, seguira dibujando en el canvas una alado de la otra
        if(currentColumn  < maxColumnas){
          context.drawImage(image, currentColumn*anchoCarta, currentRow*altoCarta, anchoCarta, altoCarta);
          context.strokeText(currentValue.count, 80+currentColumn*100,148+currentRow*altoCarta);
          currentColumn += 1;
        }else{
          // esta seccion haria como un salto de linea en las imagenes que va dibujando para que no se pisen, simplemente arranca una nueva fila nada mas.
          currentColumn = 1;
          currentRow += 1;
          context.drawImage(image, 0, currentRow*altoCarta, anchoCarta, altoCarta);
          context.strokeText(currentValue.count, posXCardCount, (currentRow+1)*altoCarta);
        }

        // simplemente para que lo haga cuando ya haya recorrido todo
        if(index+1 == cards.length){
          const data = await canvas.toDataURL();
          base64.current = data.replace('"','');
          setLoadingCard(true)
        }      
      });
    });
  }
  const shareImages = async (message:string) => {
    try {
      const shareOptions = {
        message,
        url: base64.current,
      };
      await Share.open(shareOptions);
    } catch (error) {
      console.error('Error al compartir la imagen:', error);
    }
  };


  return (
    <View>
      {/* importante que este este view con display none para que no se renderice en la app y muy importante tener el canvas aca adentro para que pueda dibujar las cartas que se compartiran */}
    <View 
    // estos estilos son obligatorios para ocultar el canvas... sin esto arrojara error al actualizar el componente cuando en el flatlist se quiere subir o bajar mas una vez llegado al limite de la lista o al tope de la lista
      style={{opacity:0, height:0, width:0}}
    >
      <Canvas ref={handleCanvas} />
    </View>
    <TouchableOpacity
        onPress={()=>loadingCard && shareMessage()}
        style={{backgroundColor:'green', padding:10}}
      >
        <Text
          style={{fontSize:20, fontWeight:'bold', color:'white'}}
        >{titlePrompt}</Text>
      </TouchableOpacity>
    </View>
  );
};