import { BaseTable, Table } from "@andrewitsover/midnight";

export class Customer extends BaseTable {
    customer_id = this.IntPrimary;
    first_name = this.Text;
    last_name = this.Text;
    middle_initial = this.Null(this.Text);
    phone_num = this.Int;
    date_join = this.Now;
}

export class Product extends BaseTable {
    product_id = this.IntPrimary;
    product_name = this.Unique(this.Text);
    price = this.Int;
}

export class Topping extends BaseTable {
    topping_id = this.IntPrimary;
    topping_name = this.Unique(this.Text);
    price = this.Int;
    extra_price = this.Int;
}

export class Cart extends BaseTable {
    cart_id = this.IntPrimary;
    customer_id = this.Cascade(Customer, {
        column: 'customer_id',
        notNull: true,
        onUpdate: 'no action'
    });
    date_created = this.Now;
}

export class OrderItem extends BaseTable {
    order_id = this.IntPrimary;
    cart_id = this.Cascade(Cart, {
        column: 'cart_id',
        notNull: true,
        onUpdate: 'no action'
    });
    product_id = this.Cascade(Product, {
        column: 'product_id',
        notNull: true,
        onUpdate: 'no action'
    });
    sugarLevel = this.Real;
    iceLevel = this.Text;
    quantity = this.Default(1);
}

export class Sale extends BaseTable {
    sale_id = this.IntPrimary;
    cart_id = this.Cascade(Cart, {
        column: 'cart_id',
        notNull: true,
        onUpdate: 'no action'
    });
    sale_date = this.Now;
    sale_customer_num = this.Int;
    payment_method = this.Text;
    total_price = this.Int;
    tax_percentage = this.Default(0.12);
    tax = this.Int;
    tip_percentage = this.Real;
    total_tip = this.Int;
    total_amount = this.Int;
    sale_completed = this.Bool;
}

export class OrderTopping extends BaseTable {
    order_topping_id = this.IntPrimary;
    order_id = this.Cascade(OrderItem, {
        column: 'order_id',
        notNull: true,
        onUpdate: 'no action'
    });
    topping_id = this.Cascade(Topping, {
        column: 'topping_id',
        notNull: true,
        onUpdate: 'no action'
    });
    extra = this.Default(false);
}