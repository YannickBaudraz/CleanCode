class User:
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email


user_data = {
    'entered_name': {
        'value': 'Yannick',
        'is_valid': True
    },
    'entered_age': {
        'value': 28,
        'is_valid': True
    },
    'entered_email': {
        'value': 'yannick@test.com',
        'is_valid': True
    }
}

User = User('Yannick', 28, 'yannick@test.com')
