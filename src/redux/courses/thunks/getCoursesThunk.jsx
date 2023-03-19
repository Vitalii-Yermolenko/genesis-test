export function getCoursesThunk(){
    return function(dispatch, getState){
        const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
        const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
        const token = [header, body, signature].join('.')
        dispatch({type:"GET_COURSES_REQUEST"});
            fetch("http://api.wisey.app/api/v1/core/preview-courses", {
              method: 'GET',
              mode: "cors",
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            })
            .then(r => r.json())
            .then(data => {
                dispatch({type:'GET_COURSES_SUCCSES', payload:{courses:data}})
            })
            .catch((error) => {
                console.error(error)
                dispatch({type:'GET_COURSES_ERROR'})
            })
    }
}