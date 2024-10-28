from domain.product import Electronics, Clothing

class ProductFactory:
    @staticmethod
    def create_product(product_type):
        if product_type.lower() == "electronics":
            return Electronics()
        elif product_type.lower() == "clothing":
            return Clothing()
        else:
            raise ValueError("Unknown product type.")
