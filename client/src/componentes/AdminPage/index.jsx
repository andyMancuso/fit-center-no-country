import { useEffect, useContext } from "react";
import { UserContext } from "../../store/userContext";
import Title from "../Title";
import profesor from "../../assets/imgs/profesor.jpg";
import ModalEditarPerfil from "./ModalEditarPerfil";

const AdminPage = () => {

  const userCtx = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      // console.log("ID DEL CONTEXTO:", userCtx.userId);
      console.log("NOMBRE DEL CONTEXTO:", userCtx.userNameRegistered);
      console.log("EMAIL DEL CONTEXTO:", userCtx.userEmailRegistered);
      // console.log("TOKEN DEL CONTEXTO:", userCtx.userTokenRegistered);
    }, 2500);
  }, [userCtx.length]);

  return (

    <main className='grow flex flex-col w-full gap-2 p-5 ml-auto bg-pallete-white dark:bg-pallete-lightgrey'>

      <Title title={'Perfil administrador'} />
      <section className='flex flex-col'>

        <div className=" self-center w-full sm:w-auto flex flex-col sm:flex-row gap-7 hero-content">
          <span className="avatar">
            <div className="w-[min(500px,40vw)] sm:w-[min(500px,20vw)] rounded-full">
              <img src={profesor} />
            </div>
          </span>

          <div className='px-4 sm:ml-10 md:ml-[8rem] '>
            <div className="mb-2">
              <label htmlFor=""> <p className='text-pallete-black font-PoppinsSemibold text-sm md:text-lg'>Nombre y Apellido:</p></label>
              <p className=" font-PoppinsRegular text-pallete-black text-sm md:text-lg">{userCtx.userNameRegistered}</p>
            </div>

            <div className="mb-2">
              <label htmlFor=""> <p className='text-pallete-black font-PoppinsSemibold text-sm md:text-lg'>Correo:</p></label>
              <p className=" font-PoppinsRegular text-pallete-black text-sm md:text-lg">{userCtx.userEmailRegistered}</p>
            </div>

            <ModalEditarPerfil />
          </div>
        </div>
      </section>
    </main>
  )
}

export default AdminPage

