const clientes = [{
            nome:"Rafael",
            idade:20,
            cpf:"1557882592",
            email:"rafael@gmail.com",
            fones:["55995332664","55995252688"],
            dependentes: [{
                nome:"Patricia",
                parentesco:"irmã",
                idade:24 
                },
            {
                nome:"Amanda",
                parentesco:"cunhada",
                idade:20    
            }],
        },
        {   
            nome:"Carlos",
            idade:20,
            cpf:"1557882592",
            email:"rafael@gmail.com",
            fones:["55995332664","55995252688"],
            dependentes: [{
                nome:"Sophia",
                parentesco:"filha",
                idade:10,
            },
            {
                nome:"Bruna",
                parentesco:"tia",
                idade:35,
            },
            {
                nome: "Flávio",
                parentesco:"primo",
                idade:30
            }],
        },
        {
            nome:"Paulo",
            idade:20,
            cpf:"1557882592",
            email:"rafael@gmail.com",
            fones:["55995332664","55995252688"],
            dependentes: [{
                nome: "jose",
                parentesco:"irmao",
                idade:14
            }],
        }
    ]
                        //operador de espalhamento
    const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes, ...clientes[2].dependentes]
    console.table(listaDeDependentes)