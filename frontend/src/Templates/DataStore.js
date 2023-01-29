import foodmedia from '../img/upfood.jpg';
import bkashlogo from '../media/bkash_logo.png';
import cod_logo from '../media/cod_logo.jpg';
import foodpanda_logo from '../media/foodpanda_logo.png';
import nogod_logo from '../media/nogod_logo.png';
import pathaofood_logo from '../media/pathaofood_logo.jpg';
import visa_logo from '../media/visa_logo.jpg';
import shohozfood_logo from '../media/shohozfood_logo.png';
import hungrynaki_logo from '../media/hungrynaki_logo.png';
class DataStore{
    constructor(){
        this.logo = {
            'bkash':bkashlogo,
            'foodpanda':foodpanda_logo,
            'pathaofood':pathaofood_logo,
            'cod':cod_logo,
            'nogod':nogod_logo,
            'visa':visa_logo,
            'shohozfood':shohozfood_logo,
            'hungrynaki':hungrynaki_logo
        };
        this.itemList = 
         [{
            item_price: 15.29,
            item_count: 0,
            total_price: 0,
            item_name: "Kala bhuna",
            item_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.",
            item_media: foodmedia
        },
        {
            item_price: 15.29,
            item_count: 0,
            total_price: 0,
            item_name: "Kala bhuna",
            item_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.",
            item_media: foodmedia
        },
        {
            item_price: 18.90,
            item_count: 0,
            total_price: 0,
            item_name: "Beef buna",
            item_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.",
            item_media: foodmedia
        },
        {
            item_price: 15.29,
            item_count: 0,
            total_price: 0,
            item_name: "Kala bhuna",
            item_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.",
            item_media: foodmedia
        }];


    this.orderList= {
            order_item_count: 5,
            order_summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus velit inventore, laborum maxime magnam recusandae, blanditiis repudiandae necessitatibus expedita cumque ut esse illo harum deserunt voluptate delectus, dolores tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur nihil optio repudiandae ut consequatur laboriosam quidem alias, illo hic, quam tempora porro perferendis autem accusantium tempore ea, architecto a.',
            order_total_amount: 123.34
        };
    


    this.confirmList = {
            checkout_item_count: 5,
            checkout_item_summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus velit inventore, laborum maxime magnam recusandae, blanditiis repudiandae necessitatibus expedita cumque ut esse illo harum deserunt voluptate delectus, dolores tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur nihil optio repudiandae ut consequatur laboriosam quidem alias, illo hic, quam tempora porro perferendis autem accusantium tempore ea, architecto a.',
            checkout_total_amount: 124.23,
            checkout_deliveryvendor: 'Pathao Food',
            checkout_delivery_charge: 5.77,
            checkout_pay_amount: 130.00
        };

    this.pageProperties = [
        {
            leftBtn: "Confirm",
            rightBtn: "Return",
            mainTitle: "Order Cart"
        },
        {
            leftBtn: "Check Out",
            rightBtn: "Return",
            mainTitle: "Order Confirmation"
        },
        {
            leftBtn:"Pay",
            rightBtn:"Cancel",
            mainTitle:"Check Out"
        }
    ];

    }
    getItems() {
        return this.itemList;
    }

    getOrders(){
        return this.orderList;
    }

    getConfirms(){
        return this.confirmList;
    }
    

}

export default DataStore;