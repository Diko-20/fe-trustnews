import FormCategoryPage from "../components/form-category"

const CreateCategoryPage = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Tambah Kategori</div>
            </div>

            <FormCategoryPage type="ADD"/>
        </div>
    )
}
export default CreateCategoryPage;