export default function Profile({name,age}) {
    return (
      <div className='p-4 m-4 rounded-lg shadow-lg bg-gray-100 flex items-center gap-4'>
          <h2 className='text-2xl font-bold '>{name}</h2>
          <h3 className='text-gray-600  '>{age}</h3>
          <button className='rounded bg-blue-600 px-4 py-2 hover:bg-blue-700 text-white'>View Profile</button>
    </div>
  )
}
