import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='w-1/2 bg-slate-200 h-[35rem] m-auto '>
      <h1 className='text-bold text-center mt-1'>Anamika Saini</h1>
    <div>
    <div className='flex justify-between mt-4 mx-2'>
      <div>
          <p className='text-lg'>• United Institute Of Technology</p>
          <h1>• Computer Science And Engineering</h1>
          <h1 className='text-bold'>Batch- 2023</h1>
          <h1>Prayagraj,India</h1>
          <div className='flex'>
              <a href="https://www.linkedin.com/in/anamika-saini-4347b0165/" target="_blank">
              <img alt="linkedin" 
              className='h-6 w-6 rounded-full mt-2 mr-3'
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUCdLP///8Aa6+/2eqy0eUAcbL7/v8Ab7Hj8fdEjsBKk8MAbbAAaq6RvNl2q9DV5/Lw9/sAd7W51ujx+PvJ4O7o8vhdnsmbw90ngrpppMynyuEAereBs9Te7PXT5vF7r9JVmcc1ib4hgbqTvtphocvccANMAAAGNElEQVR4nO3d3XqiMBAG4AQcUg0qKPgHWKW9/2tcrNtWLTKDazcZnvmOeoLlfRJISEJQ+jJRlYXck1XRlUl9/5nsDkUQB9wTB8Vhl7QI8zINQA0jEBRlfivcFdb1eT01thhdCaPZYMrvM2Bn0bcwWg2rAM+xq+hLuB0isCFuP4XrYQIb4vosrFyfyC+m+hBujevz+LWY7UlYDe0uehmoGuF0qFfhKXbaCI+DLsOxVsmQgQ0xUfvY9Un8auK9CgPXJ/GrCUK1GLhwoUZDvpU2N9ORCLlHhPwjQv4RIf+IkH9EyD+9hWCMtdYAm8fmfkKw6Xg7Xe/W5ftRWR7IPkKjVqOXrzmrajcBDqOQdCHAa6Wvs98ymM4hC+1kr38m3Hh/m6IK4zJqAWqdbH0fAyEK43Wr75TScyJN2AHUeuo3kSS00w6g7xM7FKE5dAJ15PW0AEWY3rYSt9n7XIgEoemuo77XU4KwyFHhC2uheUWBWq/8vRIJwra+zG08nt1BhbBp78xcZ5n+rxPuHVy4JQC1PnhbTVGh7erOfKf0tgeOCxck4c7bCxEXZiShv7caXEi5lWqdMa6ltDLkLAxJwhHjWrojCf1d3YgKzYwk9Lfvjbf4Ywow2vBt8ZV6wYF67m0lJQhJnRqPlzfiQhjjXe+o+E+n+0AItZTQb/O3z0YSwhErRI+fnWgjUQE2UDPztqlQxPFS6O65jXwGEoVF13hilnrbFp5CG9WH+n6jmBVeA6kzM1Dcq6gjv0uQPrsG0N7wl97PddPngO34ZzEuan/7Mp/pMY8P8WSxvOAlu2PsewGqnmsxIEi367DKk3wevh0Ug0l81X89jbHWqELZwPvr7zOyJop/RMg/IuQfEfKPCN3lWX0m74QANo6bLmG6KU5LruO46R/+E9YvIQS2Xr0t5vn5GSZaJlU2mq42JjAPK0lCg+WRo36cMth0tWsfLUmy8ggP9vUpwnr6Nu1M2fa/N93HvE2uDzIwudz56Geq9WPryikjwujsU97yn2GCHHQ11WFgS5hr3s/S/kaSEBvzblvW1kcIdkVbLaCrWe8L0gehrWkrWj6yH/e8MXogjLed199tomm/W45zIRAXClwk7NUbcC2ElHgFXqbqMwrtWGg6pgu6/mFNJ7oVwuYhYFOK9MkSp0KosTXyd5PxECrairLWkCfWXQr730UvQ12j5FAYr/4FqHPipehQaHo19D+zI86ZOROWtOXVHRmTCtGdMKe8A9CZBe3VUGfCJ4RUiKyFpCuRtTCirMViLSQtxuItzAjbBfIWakKrz1z4ildT5sIQr6bMhQkK5C4kNPpeCaMkSZb9OnMleiH6IlwuysOmTlWa1uPXq8Vl3SFsl+CFMHtXgYHzLBqACWBGHb+ZsyjD6hDf/oBB15b/TYK+B+GBcN06OxccSFU1Qm817oWvd5o0OyER0eEa58LybpttSW+Ro69YuxZ2/XM7wo/HnxEdCzsHzKAm1FN0KMOxsPsBLyAMVu39vtPMu0+PsmMF+m0Ot0LsGT3Gh/1zrEF0KkSba1Oiv7HE3s91KkQ7lXDEhdgmVU6F+OSKRUf+0U6NSyHhBXDChYjtG+NSWBEGWfD2AtvAyaVwgQ+yEPY78FlIeMUdkM3wmrwjNcGlkDCLS7iZYr/iUkiYOoKatZC0KAbtt3ksJM0cAfp4gfX8HApJ35kCdEtDj4U5RWjQQTePhRXlS1oi9Fo4F6EIRShCEYpQhCIUoQhFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhCIUoQhFKEIRilCEIhShCEUoQhGK8J6wO3eE2FF7yg6kjRD5mScIVTrG0nZUgR2EvcB7Dvq/n/Aud1MeWJ541NN/xa+vP/xGRMg/IuQfEfKPCPlHhPwjQv4RIf80wpD6tQ+eCUJF2fabceJMVQMvw0pFrs/hlxMpPen7OTpOgYlWej3km6ldN8KcstkP16R5I8R3quUbW+qTkPrpJH6BIv8QEnY2Z5qPrYhPwqHWU/ux/6k6z+AMkWjPuy6ehbp8/KvJngbM353r/wr1on7wo8l+Br6/UPsp1Mm0CIZihKCYfm1f+yVsjKNVEcQB98RBsRpd7EZ4IWwSvWQh92Qv19PyfwBcR6mo9vr3ygAAAABJRU5ErkJggg=="/>
              </a>
              <a href="https://github.com/AnamikaSaini08" target="_blank">
              <img alt="linkedin" 
              className='h-6 w-6 rounded-full mt-2'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTyG1wn_tSkiaza140tN6WI6b6znJV5WZRQ&usqp=CAU"/>
              </a>
          </div>
        </div>
        <div>
          <img className='rounded-full'
          src="data:image/jpeg;base64,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"/>
        </div>
    </div>
    <div className='mx-2 mt-5'>
          <h1 className='text-bold text-2xl'>Experience</h1>
          <h1 className='text-bold mt-2'>HEXADECIMAL SOFTWARE PVT. LTD. | SDE Intern</h1>
          <p>• Worked as a bug solver on a React-based project, tracking and resolving issues
                through Jira tickets.</p>
          <p>• Designed and developed new page components, ensuring that the design and
                user experience align with the overall project goals and client expectations.</p>
        </div>
        <div className='mx-2'>
          <h1 className='text-bold mt-2'>CODE QUOTIENT PVT. LTD. | REACTJS INTERN</h1>
          <p>• Built high-quality React pages forthe company’s projects, applying best
            practices in front-end development..</p>
          <p>• Proactively identified and solved issues in the React-based project by
              effectively using Jira tickets and working closely with the development team.</p>
        </div>
    </div>
    </div>
  )
}

export default Profile
