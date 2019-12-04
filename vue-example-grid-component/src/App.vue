<template>
    <div id="app">

        <input type="text" v-model="search" />

        <table>
            <tr>
                <th v-for="item in header"
                :key="item"
                :class="order[item] ? 'desc' : 'asc'"
                @click="sort(item)"
                >
                    {{ item }}
                </th>
            </tr>
            <tr v-for="item in filtedList()" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.power }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            header: ['name', 'power'],
            list: [
                { name: 'Chunk Norris', power: Infinity },
                { name: 'Bruce Lee', power: 9000 },
                { name: 'Jackie Chan', power: 7000 },
                { name: 'Jet Li', power: 6000 },
            ],
            order: {
                name: false,
                power: false
            },
            search: ''
        }
    },
    methods: {
        filtedList () {
            const query = this.search

            if (!query || query.length === 0) {
                return this.list
            }

            return this.list.filter(function (data) {
                return Object.keys(data).some(function (key) {
                    return String(data[key]).toUpperCase()
                    .includes(query.toUpperCase())
                })
            })
        },
        sort(key) {
            const isDesc = this.order[key]

            this.order[key] = !isDesc
            this.list.sort(function (prev, next) {
                let dataPrev;
                let dataNext;

                if (key === 'name') {
                    dataPrev = prev.name.toUpperCase()
                    dataNext = next.name.toUpperCase()
                } else {
                    dataPrev = prev.power
                    dataNext = next.power
                }
                
                if (dataPrev < dataNext) {
                    return isDesc ? -1 : 1;
                }

                if (dataPrev > dataNext) {
                    return isDesc ? 1 : -1;
                }

                return 0;
            })
        }
    }
}
</script>

<style scoped>
table {
    background: lightgray;
}

th {
    text-transform: capitalize;
}

th,
td {
    padding: 1rem;
}

.asc::after {
    display: inline-block;
    content: "▲";
    margin-left: 1em;
}

.desc::after {
    display: inline-block;
    content: "▼";
    margin-left: 1em;
}
</style>