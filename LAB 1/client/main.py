from factory.product_factory import ProductFactory
from domain.user import User, UserSession
from models.shopping_cart import ShoppingCartBuilder


def main():
    # Singleton: User session
    session = UserSession()
    user = User("john_doe")
    session.login(user)

    print(f"User logged in: {session.current_user.username}")

    # Factory Method: Create products
    electronics_product = ProductFactory.create_product("electronics")
    clothing_product = ProductFactory.create_product("clothing")

    # Builder: Create shopping cart
    cart_builder = ShoppingCartBuilder()
    shopping_cart = (cart_builder
                     .add_product(electronics_product)
                     .add_product(clothing_product)
                     .build())

    print(shopping_cart.checkout())


if __name__ == "__main__":
    main()