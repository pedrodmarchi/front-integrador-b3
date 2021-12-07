import './style.scss';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';

const About = () => {

    const integrantes = [
        {
            name: 'Douglas Araújo',
            image: 'https://avatars.githubusercontent.com/u/86627627?v=4',
            github: 'https://github.com/Dougsss',
            linkedin: 'https://www.linkedin.com/in/douglas-araujo-393998179/'
        },
        {
            name: 'Fernando Victor',
            image: 'https://media-exp1.licdn.com/dms/image/C4D03AQEJwAScjr2Jwg/profile-displayphoto-shrink_400_400/0/1629204204610?e=1644451200&v=beta&t=3-vPKzEbzvhV43-v4m9UbyOjpo8zpd1J41xYMtWRdag',
            github: 'https://github.com/marianabpacheco/projeto01-front',
            linkedin: 'https://www.linkedin.com/in/fernando-victor-5522211bb/'
        },
        {
            name: 'Lucas Neiva',
            image: 'https://avatars.githubusercontent.com/u/72476343?v=4',
            github: 'https://github.com/lucassneiva',
            linkedin: 'https://www.linkedin.com/in/lucassneiva/'
        },
        {
            name: 'Mariana Pacheco',
            image: 'https://avatars.githubusercontent.com/u/83087985?v=4',
            github: 'https://github.com/marianabpacheco',
            linkedin: 'https://www.linkedin.com/in/marianabpacheco/'
        },
        {
            name: 'Pedro de Marchi',
            image: 'https://avatars.githubusercontent.com/u/78434099?v=4',
            github: 'https://github.com/pedrodmarchi',
            linkedin: 'https://www.linkedin.com/in/pedro-d-umbra-de-marchi-b1531620b/'
        }
    ]


    return (


        <>
            <div id="about">
                <h2>Saiba mais sobre nós</h2>
                <section className="aboutContainer">

                    {integrantes.map((item) =>
                        <div className="card">
                            <h3>{item.name}</h3>
                            <img id="profileImage" alt="Imagem de cada integrante" src={item.image} ></img>
                            <div class="icons">
                                <a rel="noreferrer" target="_blank" href={item.github}>
                                    <img target="_blank" src={github} alt="logo do github" class="networkLogo"></img>
                                </a>

                                <a rel="noreferrer" target="_blank" href={item.linkedin}>
                                    <img target="_blank" src={linkedin} alt="logo do github" class="networkLogo"></img>
                                </a>

                            </div>
                        </div>
                    )}
                </section>
            </div>

        </>
    )

}

export default About;
