import CardDigimon from "./cards/CardDigimon";
import Folder from './folders/Folder';
import { CardListCardsSelected, CardListCardsView, CardListMyDeck } from './cardList'
import { ModalApoyoComentarios, ModalCard, ModalFilter, ModalAyuda} from './modals'
import { BtnAddRemoveCards, BtnShareCards, BtnsHeadersCard, BtnsHeadersCardSelecteds, BtnChangeNameDeck, BtnImportDeck, BtnsExportDeck} from './buttons'
import { ErrorMessage, SuccesMessage, ErrorSound} from './alerts'
import ModalContadorMemoria from './modals/ModalContadorMemoria';
import { FlowChart, QuestionAnswer, ErrataCards } from './faqs'
import MemoryGauge from './memoryGauge/CountMemory';

export {
    CardDigimon,
    Folder,
    CardListCardsView,
    CardListCardsSelected,
    ModalFilter,
    ModalCard,
    ModalApoyoComentarios,
    ModalAyuda,
    ModalContadorMemoria,
    BtnAddRemoveCards,
    CardListMyDeck,
    BtnShareCards,
    BtnsHeadersCard,
    BtnsHeadersCardSelecteds,
    BtnChangeNameDeck,
    BtnsExportDeck,
    BtnImportDeck,
    ErrorMessage,
    ErrorSound,
    SuccesMessage,
    QuestionAnswer,
    FlowChart,
    MemoryGauge,
    ErrataCards
}