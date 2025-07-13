import c_one from "../assets/c_one.svg"
import c_two from "../assets/c_two.svg"
import c_three from "../assets/c_three.svg"
import c_four from "../assets/c_four.svg"
import c_five from "../assets/c_five.svg"
import Image from "next/image"
const Company = () => {
    return (
        <section className="pt-[12px]">
            <div className="container">
                <div className="py-[60px] px-[62px] knowledge_shawow flex items-center gap-[129px] bg-white rounded-[5px]">
                    <div>
                        <Image src={c_one} alt="image" />
                    </div>
                    <div>
                        <Image src={c_two} alt="iamge" />
                    </div>
                    <div>
                        <Image src={c_three} alt="image" />
                    </div>
                    <div>
                        <Image src={c_four} alt="image" />
                    </div>
                    <div>
                        <Image src={c_five} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Company
