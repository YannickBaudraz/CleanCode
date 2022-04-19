class User:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age

    def save(self):
        print('Saving {0}'.format(self))


user = User('Yannick', 28)
user.save()
