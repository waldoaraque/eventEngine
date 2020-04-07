class Interface {
    constructor() {
        this.init()
        this.list = document.getElementById('resultado-eventos')
    }

    init() {
        this.getCatgories()
    }

    getMessage(m, c) {
        const div = document.createElement('div')
        div.classList = c

        div.appendChild(document.createTextNode(m))

        const searchDiv = document.querySelector('#buscador')

        searchDiv.appendChild(div)
        setTimeout(() => {
            this.clearMessage()
        }, 3000)
    }

    clearMessage() {
        const alert = document.querySelector('.alert')
        if(alert) {
            alert.remove()
        }
    }

    getCatgories() {
        const listCategories = eventBrite.getCategoriesEB()
            .then(c => {
                const categories = c.categories.categories
                const catSelected = document.getElementById('listado-categorias')

                categories.forEach( cat => {
                    const option = document.createElement('option')
                    option.value = cat.id
                    option.appendChild(document.createTextNode(cat.name_localized))

                    catSelected.appendChild(option)
                })
            })
            .catch( err => {
                console.log(`An error has been ocurred: ${err}`)
            })
    }
}