export const CreateProductForm = () => {
  return (
    <div>
      <form className='flex flex-col gap-5 justify-center items-center border border-solid border-gray-200'>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text' />
        <label htmlFor='price'>Price</label>
        <input id='price' name='price' type='text' />
        <label htmlFor='description'>Description</label>
        <input id='description' name='description' type='text' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
