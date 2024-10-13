import json


# Order class (SRP)
class Order:
    # The Order class is responsible for storing details about a customer's order.
    # Each order has an ID, a customer's name, and a list of items (products).
    # Items are stored as a list of tuples, where each tuple contains the product name, quantity, and price.

    def __init__(self, order_id, customer_name, items):
        self.order_id = order_id           # Unique identifier for the order
        self.customer_name = customer_name   # Name of the customer who placed the order
        self.items = items                   # List of items in the order

    def calculate_total(self):
        # This method calculates the total cost of all items in the order.
        # It multiplies the quantity of each item by its price and sums them up.
        return sum(quantity * price for _, quantity, price in self.items)

# OrderManager class (SRP)
class OrderManager:
    # The OrderManager class manages all the orders placed in the system.
    # It keeps track of the orders and provides methods to add and retrieve them.

    def __init__(self):
        self.orders = []  # Initialize an empty list to hold all orders

    def add_order(self, order: Order):
        # Adds a new order to the list of orders.
        self.orders.append(order)

    def get_orders(self):
        # Returns the list of all orders currently managed by the OrderManager.
        return self.orders

# OrderRepository class (SRP, OCP)
class OrderRepository:
    # The OrderRepository class is responsible for saving and loading orders to and from a JSON file.
    # This separates the concerns of data storage from order management, allowing easy extension in the future.

    @staticmethod
    def save_orders_to_file(orders, filename):
        # This method saves the provided list of orders to a specified JSON file.
        order_data = []  # Initialize an empty list to hold order data for JSON serialization
        for order in orders:
            # For each order, gather the relevant data into a dictionary
            order_data.append({
                "order_id": order.order_id,
                "customer_name": order.customer_name,
                "items": order.items,
                "total": order.calculate_total()  # Calculate the total for each order
            })
        # Write the order data to the specified JSON file, formatting it nicely
        with open(filename, 'w') as f:
            json.dump(order_data, f, indent=4)
        print(f"Orders saved to {filename}")  # Confirmation message

    @staticmethod
    def load_orders_from_file(filename):
        # This method loads orders from a specified JSON file and returns a list of Order objects.
        with open(filename, 'r') as f:
            order_data = json.load(f)  # Read the JSON file and parse it into Python data structures
            orders = []  # Initialize an empty list to hold Order objects
            for data in order_data:
                # Create an Order object for each entry in the loaded data
                order = Order(
                    order_id=data["order_id"],
                    customer_name=data["customer_name"],
                    items=data["items"]
                )
                orders.append(order)  # Add the created Order object to the list
            return orders  # Return the list of orders

# Example usage
if __name__ == "__main__":
    # Here we create a couple of sample orders to demonstrate the functionality.
    order1 = Order(order_id=1, customer_name="Alice", items=[("Laptop", 1, 1200.00), ("Mouse", 2, 25.00)])
    order2 = Order(order_id=2, customer_name="Bob", items=[("Phone", 1, 800.00)])

    # Now we create an instance of OrderManager to handle our orders.
    manager = OrderManager()
    manager.add_order(order1)  # Add the first order to the manager
    manager.add_order(order2)  # Add the second order to the manager

    # Save the orders to a JSON file for persistent storage.
    OrderRepository.save_orders_to_file(manager.get_orders(), 'orders.json')

    # Load orders back from the JSON file to demonstrate that they can be retrieved.
    loaded_orders = OrderRepository.load_orders_from_file('orders.json')
    # Print out each loaded order's details to verify the correctness of the operation.
    for order in loaded_orders:
        print(f"Order ID: {order.order_id}, Customer: {order.customer_name}, Total: ${order.calculate_total():.2f}")
