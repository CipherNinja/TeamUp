from mysql.connector import connect

try:
    connect_to_database = connect(
        host="localhost",
        user="root",
        passwd="9069076975"
    )

    cursor_object = connect_to_database.cursor()
    cursor_object.execute("CREATE DATABASE teamup_data")

    print("ALL DONE !")
except Exception as error:
    print(error)
