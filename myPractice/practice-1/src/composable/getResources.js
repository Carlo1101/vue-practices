import { ref } from 'vue'

const getResources = () => {
    const res = ref([])
    const error = ref(null)

    const load = async () => {
        try{
            let response = await fetch("https://script.google.com/macros/s/AKfycbwnbNkjwDsVqNukPwjBjuTj1-LRZ6DTR4z1fTM7NVMR-l-wxvjoQgZshhxTtBqQKUEf/exec")
            if(!response.ok){
                throw Error('Unable to fetch data')
            }
            res.value = await response.json()
            console.log(res.value)

        }catch(err){
            error.value = err.message
        }
    }

    return { res, error, load}
}

export default getResources