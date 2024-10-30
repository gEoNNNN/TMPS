import json


class Order:
    # The Order class is responsible for storing details about a customer's order.
    # Each order has an ID, a customer's name, and a list of items (products).
    # Items are stored as a list of tuples, where each tuple contains the product name, quantity, and price.

    def __init__(self, order_id, customer_name, items):
        self.order_id = order_id
        self.customer_name = customer_name
        self.items = items

    def calculate_total(self):
        return sum(quantity * price for _, quantity, price in self.items)

class OrderManager:
    # The OrderManager class manages all the orders placed in the system.
    # It keeps track of the orders and provides methods to add and retrieve them.

    def __init__(self):
        self.orders = []

    def add_order(self, order: Order):
        self.orders.append(order)

    def get_orders(self):
        return self.orders


class OrderRepository:
    # The OrderRepository class is responsible for saving and loading orders to and from a JSON file.
    # This separates the concerns of data storage from order management, allowing easy extension in the future.

    @staticmethod
    def save_orders_to_file(orders, filename):
        order_data = []
        for order in orders:
            order_data.append({
                "order_id": order.order_id,
                "customer_name": order.customer_name,
                "items": order.items,
                "total": order.calculate_total()
            })
        with open(filename, 'w') as f:
            json.dump(order_data, f, indent=4)
        print(f"Orders saved to {filename}")

    @staticmethod
    def load_orders_from_file(filename):
        with open(filename, 'r') as f:
            order_data = json.load(f)
            orders = []
            for data in order_data:
                order = Order(
                    order_id=data["order_id"],
                    customer_name=data["customer_name"],
                    items=data["items"]
                )
                orders.append(order)
            return orders

if __name__ == "__main__":
    order1 = Order(order_id=1, customer_name="Alice", items=[("Laptop", 1, 1200.00), ("Mouse", 2, 25.00)])
    order2 = Order(order_id=2, customer_name="Bob", items=[("Phone", 1, 800.00)])
    manager = OrderManager()
    manager.add_order(order1)
    manager.add_order(order2)
    OrderRepository.save_orders_to_file(manager.get_orders(), 'orders.json')
    loaded_orders = OrderRepository.load_orders_from_file('orders.json')
    for order in loaded_orders:
        print(f"Order ID: {order.order_id}, Customer: {order.customer_name}, Total: ${order.calculate_total():.2f}")
