class ShoppingCart:
    def __init__(self):
        self.products = []
        self.total_price = 0.0

    def add_product(self, product):
        self.products.append(product)
        self.total_price += 10.0  # Example price increment

    def checkout(self):
        return f"Checking out with {len(self.products)} products. Total price: ${self.total_price}"

class ShoppingCartBuilder:
    def __init__(self):
        self.cart = ShoppingCart()

    def add_product(self, product):
        self.cart.add_product(product)
        return self

    def build(self):
        return self.cart
