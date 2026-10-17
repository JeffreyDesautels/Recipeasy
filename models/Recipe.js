export default class Recipe {

    #id;

    constructor({ id, category, name, duration_hours, duration_minutes, description, user_id }) {
        this.#id = id
        this.category = category
        this.name = name
        this.durationHours = duration_hours
        this.durationMinutes = duration_minutes
        this.description = description
        this.userId = user_id
    }

    get id() {
        return this.#id
    }

    toJSON() {
        return {
            id: this.#id,
            ...this
        }
    }

}