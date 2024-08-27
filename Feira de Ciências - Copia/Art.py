def quiz():
    print("Bem-vindo ao Quiz!")

    questions = [
        {
            "question": "Qual a forma de lixo que você possui?",
            "options": ["A) Reciclável", "B) Orgânico"]
        },
        {
            "question": "Que tipo de lixo reciclável é?",
            "options": ["A) Papel", "B) Vidro", "C) Plástico", "D) Metal"]
        }
    ]

    print("\n" + questions[0]["question"])
    for option in questions[0]["options"]:
        print(option)

    escolha1 = input("Escolha uma opção (A/B): ").upper()

    if escolha1 == "A":
        print("\n" + questions[1]["question"])
        for option in questions[1]["options"]:
            print(option)

        escolha2 = input("Escolha uma opção (A/B/C/D): ").upper()

        if escolha2 == "A":
            print("Descarte na lixeira azul!")
        elif escolha2 == "B":
            print("Descarte na lixeira verde!")
        elif escolha2 == "C":
            print("Descarte na lixeira vermelha!")
        elif escolha2 == "D":
            print("Descarte na lixeira amarela!")
        else:
            print("Escolha inválida. Tente novamente.")

    elif escolha1 == "B":
        print("Descarte na lixeira de orgânicos!")

    else:
        print("Escolha inválida. Tente novamente.")

quiz()
