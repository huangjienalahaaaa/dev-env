import $ from 'jquery'
import ShoppingCart from '../ShoppingCart/ShoppingCat'
export default class App {
    constructor(id) {
        this.$el = $('#' + id)
    }
    //初始化购物车
    initShoppingCart() {

        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init();
    }
    //初始化列表
    initList() {

    }
    init() {
        this.initShoppingCart()
        this.initList()
    }
}