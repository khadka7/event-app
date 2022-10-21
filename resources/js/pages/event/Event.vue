<template>
    <div>
        <div class="row align-items-center">
            <div class="col-md-12">
                <div class="col-md-6">
                    <h5 class="card-title">Event List</h5>
                </div>
                <div class="col-md-3 pull-right">
                    <button type="button" class="btn btn-primary">
                        <router-link :to="{ name: 'AddEvent' }">Add New</router-link>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <form @submit.prevent="filterEvent">
                <div class="row">
                    <div class="col-md-4 pull-right">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Title" v-model="filters.title">
                        </div>
                    </div>
                    <div class="col-md-4 pull-right">
                        <div class="form-group">
                            <select class="form-control" v-model="filters.event_type">
                                <option value="" disabled>Select Type</option>
                                <option v-for="option in eventTypes" :value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4 pull-right">
                        <button type="submit" class="btn btn-primary">Filter</button>
                        <button class="btn btn-warning" @click="resetFilter">Reset</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="">
                    <div class="table-responsive">
                        <table class="table project-list-table table-nowrap align-middle table-borderless">
                            <thead>
                            <tr>
                                <th width="10%">SN</th>
                                <th width="10%">Title</th>
                                <th width="30%">Description</th>
                                <th width="20%">Start Date</th>
                                <th width="20%">End Date</th>
                                <th width="10%">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="!rows || rows.length < 1">
                                <td colspan="6" align="center">No records found.</td>
                            </tr>
                            <tr v-for="(row,index) in rows">
                                <td>{{ index + 1 }}</td>
                                <td>{{ row.title }}</td>
                                <td>
                                    <p class="text-wrap">
                                        {{ row.description }}
                                    </p>
                                </td>
                                <td>{{ row.start_date }}</td>
                                <td>{{ row.end_date }}</td>
                                <td>
                                    <button type="button" class="btn btn-secondary">
                                        <router-link :to="{ name: 'EditEvent', params: { id: row.id } }">Edit
                                        </router-link>
                                    </button>
                                    <button type="button" class="btn btn-danger" @click="deleteEvent(row.id)">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {eventTypes} from "../../utils/constants";

const filterData = {
    title: "",
    event_type: ""
}
export default {
    name: "Event",
    data: () => ({
        rows: [],
        filters: {...filterData},
        eventTypes
    }),
    methods: {
        deleteEvent(id){
            if (confirm('Do you want to delete this event?')){
                const url = this.$api.EVENT_DELETE.replace(":id", id);
                axios
                    .delete(url)
                    .then((res) => {
                        alert(res.data.message)
                        this.getEvents()
                    })
                    .catch((err) => {
                       alert('Something went wrong!')
                    })
            }
        },
        resetFilter() {
            this.filters = {...filterData}
            this.getEvents()
        },
        filterEvent() {
            this.getEvents(this.filters)
        },
        encodeUrl(obj) {
            return Object.keys(obj)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key] ? obj[key] : ''))
                .join("&");
        },
        getEvents(filterData = null) {
            let url;
            url = this.$api.EVENT_LIST
            if (filterData) {
                let filterUrl = this.encodeUrl(filterData);
                url = `${url}?${filterUrl}`;
            }
            console.log(url)
            axios.get(url)
                .then((res) => {
                    this.rows = res.data.data
                })
                .catch(() => {
                    this.rows = [];
                    console.log('here')
                })
        }
    },
    mounted() {
        this.getEvents()
    }
}
</script>

<style scoped>

</style>
