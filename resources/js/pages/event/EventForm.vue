<template>
    <div>
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="mb-3">
                    <h5 class="card-title"> {{ editForm ? 'Edit' : 'Create' }} Event
                    </h5>
                </div>

            </div>
        </div>
        <div class="row">
            <form @submit.prevent="editForm ? update() : create()">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="form.title" >
                    <div id="error-text">
                        <div v-if="validationErrors && validationErrors.title" class="text-danger">
                            <small>{{ validationErrors.title[0]}}</small>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" class="form-control" v-model="form.start_date">
                    <div id="error-text">
                        <div v-if="validationErrors && validationErrors.start_date" class="text-danger">
                            <small>{{ validationErrors.start_date[0]}}</small>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="date" class="form-control" v-model="form.end_date">
                    <div id="error-text">
                        <div v-if="validationErrors && validationErrors.end_date" class="text-danger">
                            <small>{{ validationErrors.end_date[0]}}</small>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label >Description</label>
                    <textarea class="form-control"  rows="3" v-model="form.description"></textarea>
                    <div id="error-text">
                        <div v-if="validationErrors && validationErrors.description" class="text-danger">
                            <small>{{ validationErrors.description[0]}}</small>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
const formData = {
    title: "",
    start_date: "",
    end_date: "",
    description: "",
};
export default {
    name: "EventForm",
    data: () => ({
        form: {...formData},
        validationErrors: null,
        editForm: false,
    }),
    methods: {
        update() {
            const url = this.$api.EVENT_UPDATE.replace(":id", this.$route.params.id);
            axios
                .put(url, this.form)
                .then((res) => {
                    this.$router.push({path: "/events"});
                })
                .catch((err) => {
                    if (err.response.status === 422) {
                        this.validationErrors = err.response.data.errors;
                        setTimeout(() => {
                            this.validationErrors = null;
                        }, 5000);
                    }
                })
        },
        create() {
            axios
                .post(this.$api.EVENT_CREATE, this.form)
                .then((res) => {
                    alert(res.data.message)
                    this.$router.push({path: "/events"});
                })
                .catch((err) => {
                    if (err.response.status === 422) {
                        this.validationErrors = err.response.data.errors;
                        setTimeout(() => {
                            this.validationErrors = null;
                        }, 5000);
                    }
                })
        },
        getData() {
            const url = this.$api.EVENT_FIND.replace(":id", this.$route.params.id);
            axios
                .get(url)
                .then((res) => {
                    const {
                        title,
                        description,
                        start_date,
                        end_date,
                    } = {...res.data.data};
                    this.form = {
                        title,
                        description,
                        start_date,
                        end_date
                    };
                })
                .catch(() => {
                    this.form = {...formData};
                })
        },
    },
    created() {
        if (this.$route.params.id) {
            this.editForm = true
            this.getData();
        }
    },
}
</script>

<style scoped>

</style>
