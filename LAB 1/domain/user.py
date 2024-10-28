class UserSession:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(UserSession, cls).__new__(cls)
        return cls._instance

    def __init__(self):
        self.current_user = None

    def login(self, user):
        self.current_user = user
