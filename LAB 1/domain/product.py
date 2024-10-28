class Product:
    def create(self):
        raise NotImplementedError("This method should be overridden.")


class Electronics(Product):
    def create(self):
        return "Electronics product created."


class Clothing(Product):
    def create(self):
        return "Clothing product created."
