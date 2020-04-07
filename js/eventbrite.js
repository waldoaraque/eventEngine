class EventBrite {
    constructor() {
        this.token_auth = 'MLOEDEI3SGREGEPIZQS7'
        this.order = 'date'
    }

    async getEvents(srch, cat_sel) {
        const resEvent = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${srch}&sort_by=${this.order}&categories=${cat_sel}&token=${this.token_auth}`)

        const events = await resEvent.json()
        return {
            events
        }
    }

    async getCategoriesEB() {
        const resCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)

        const categories = await resCategories.json()
        return {
            categories
        }
    }
}