import { colorBackgroundCardBuy, colorBackgroundCardSell, colorBackgroundDeckBuilder } from "../../constants/colors"
import { TypeNavigation } from "../../constants/typesNavigation"

export const switchColorBackground = (builderWishedSelling:string) => {
    switch (builderWishedSelling) {
        case TypeNavigation.game.deckBuilder: return colorBackgroundDeckBuilder
        case TypeNavigation.game.cardsBuy: return colorBackgroundCardBuy
        case TypeNavigation.game.cardsSell: return colorBackgroundCardSell
    }
}
