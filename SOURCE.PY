# source.py

# This is a sample Python source file

def greet(name):
    """Function to greet a person"""
    return f"Hello, {name}!"

if __name__ == "__main__":
    # This block of code will only run if the script is executed directly
    name = input("Enter your name: ")
    print(greet(name))
