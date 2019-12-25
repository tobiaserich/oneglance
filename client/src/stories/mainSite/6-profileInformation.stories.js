import React from "react";
import { text, select } from "@storybook/addon-knobs";
import ProfileNavigation from "../../components/ProfileNavigation";
import PersonalInformation from "../../components/PersonalInformation";
import { DetailCard } from "../../components/DetailCard";
import PollInfo from "../../components/PollInfo";
import { InfoNav } from "../../components/ProfileNavigation";
import TaskDetail from "../../components/TaskDetail";

export default {
  title: "Main Page|Profile Navigation"
};

export function profileNavigation() {
  return <ProfileNavigation />;
}

export function personalInformation() {
  const gender = { male: "male", female: "female", divers: "divers", Airplane: "Airplane" };
  const address = {
    street: text("Street", "Mustermannstr."),
    houseNumber: text("number:", "11"),
    zip: text("zip", "98989"),
    city: text("City:", "Stuttgart")
  };
  return (
    <DetailCard>
      <PersonalInformation
        name={text("Name:", "Max MusterMann")}
        birthday={text("B-Day:", "11.11.1989")}
        gender={select("Gender:", gender, "male")}
        address={address}
      />
    </DetailCard>
  );
}

export function pollInformation() {
  const status = {
    blank: "blank",
    pending: "pending",
    finished: "finished"
  };
  return (
    <DetailCard>
      <InfoNav>
        <PollInfo status={select("status:", status, "blank")} />
      </InfoNav>
    </DetailCard>
  );
}

export function taskInformation() {
  return (
    <>
      <TaskDetail item={1} title="Driving with Hannes">
        {text(
          "Text field 1:",
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio corrupti voluptatum eos totam praesentium perferendis accusamus incidunt, soluta nostrum provident aspernatur iure quia natus? Pariatur possimus eius et dicta, consequuntur provident laborum sint quas voluptas perferendis, cumque iure a! Dolores, laborum quae. Eveniet enim quos minus magni ex dolorum eaque omnis, quasi ipsa totam, dignissimos nam qui animi dolor expedita quo vel nostrum explicabo consectetur assumenda rerum! Dignissimos vitae iure molestias, explicabo doloremque veniam aperiam distinctio atque consectetur illo ipsum assumenda eius ad expedita sapiente aut animi, quo accusantium ut omnis laudantium vero! Consectetur nihil ipsa ipsum, alias ad qui similique culpa facere unde dolore doloremque, corporis, delectus eligendi. Fugit dolorum libero at, incidunt ab eligendi recusandae temporibus ad minus similique sed laudantium alias vero. Nobis laudantium esse aperiam ea, nemo perspiciatis dolor dolores debitis consequatur expedita. Quod accusantium rerum, nulla optio maxime odio harum. Recusandae amet tempore culpa iure accusantium nostrum blanditiis reiciendis minima ipsam impedit, veniam esse corrupti. Quod hic esse minima illo laudantium veritatis alias impedit corporis nulla. Molestiae, natus? Labore debitis temporibus tenetur in, ad molestias nostrum. Cupiditate, quae cumque maiores dolore molestias nobis iusto, quas libero, temporibus ipsum in ducimus. Earum, hic rerum! In recusandae tenetur pariatur laborum optio possimus autem velit rerum quidem officiis corporis natus quis aspernatur magni, et officia quod nulla corrupti enim? Eum, sed, provident quidem nihil consectetur tempore quibusdam sit accusantium beatae deleniti impedit quam dolores eos enim. Impedit vel laboriosam eligendi deserunt quam ipsum repellendus illum minus unde officiis optio, expedita aliquam accusamus ab quidem quo placeat ratione pariatur qui! Impedit laudantium recusandae odit. Quasi soluta id est repudiandae nesciunt, voluptates veritatis maxime. Nulla commodi quisquam, veritatis, explicabo facilis deleniti at aliquid ipsum reiciendis dignissimos, possimus itaque ipsa deserunt quo aspernatur sequi dolorem laboriosam provident soluta hic asperiores dolore. Voluptate odio illo praesentium magni, molestiae quidem maiores voluptas consequuntur repellendus deserunt sed laudantium! Magni modi recusandae molestias autem rem, vitae quibusdam quo doloribus quam suscipit odio accusamus! Ex expedita corrupti voluptates alias porro quia, pariatur, quis soluta fugiat, placeat accusamus quae? Autem hic, vel nesciunt repellat sed nihil sint in inventore ipsum, quod distinctio debitis aperiam facilis eius nobis, ullam fuga doloribus. Consequuntur ullam quidem consequatur rerum veniam animi natus, eos officiis aspernatur doloremque quasi reprehenderit ipsa vitae architecto itaque! Provident, delectus, eveniet excepturi aliquid, molestias reiciendis velit nulla fugit dignissimos animi omnis commodi perspiciatis doloremque voluptatem cupiditate? Sed odit sunt quos maxime vitae eum praesentium odio. Aperiam delectus aliquid cumque animi porro incidunt voluptate consectetur natus in distinctio commodi tenetur error ipsam nemo nam magnam facilis iusto aspernatur, molestias laboriosam optio voluptates repellat magni est? Temporibus non minus quo odit? Ullam, iste quod? Adipisci quo magni impedit neque ea libero nisi rem consequuntur porro est error inventore cupiditate harum, necessitatibus corrupti architecto a excepturi sapiente natus iure, explicabo dolore? Vitae consequatur eum ab pariatur suscipit soluta repellat officiis, culpa iste non labore ut, blanditiis quidem numquam dignissimos corrupti, earum consectetur at magnam. Incidunt dolores, accusamus sapiente iste necessitatibus eius fuga tempore obcaecati consequuntur rem, est provident ullam, alias id? Culpa quos dolorum quaerat officia sint qui deserunt deleniti illum in recusandae illo aspernatur, sunt perspiciatis inventore adipisci nobis fugiat, vitae aperiam est iste ducimus. Soluta esse exercitationem voluptate dolorum dignissimos, porro ut ea! Non inventore rerum odit officia labore delectus aliquid repellat eligendi, porro, architecto maiores temporibus. Ab vel sunt voluptatem vero eligendi ipsum deserunt quaerat minus molestiae numquam. Tempore id officia beatae perspiciatis nisi aliquam reiciendis deserunt laboriosam minima unde recusandae, nesciunt dolore. Praesentium asperiores obcaecati saepe tempore quam ullam ipsum assumenda, vel fuga aut tempora iusto provident minus odio omnis, ut harum magnam, cum ab repellendus neque modi ipsam velit perspiciatis! Assumenda quam voluptatum dolorem ut inventore quibusdam! Nulla doloribus perferendis assumenda at unde dolorem exercitationem, deleniti, doloremque quasi ipsa culpa sed. Sed in corporis nihil nulla ullam at fugiat est praesentium numquam corrupti animi culpa quidem ipsum nisi dolor laudantium officia, quibusdam consequatur consequuntur adipisci nostrum ut temporibus! Voluptas praesentium voluptatibus ut accusamus? Molestiae ratione nesciunt harum illum vitae nostrum ducimus enim vel aut blanditiis! Assumenda adipisci quisquam incidunt autem consequuntur aspernatur iste voluptatibus. Cum quod neque vitae fugit voluptate officia, illum mollitia commodi beatae dicta veritatis laborum nesciunt ex architecto non. Minus, perferendis nihil. Quam non neque a corporis possimus vitae inventore velit natus aut magnam iste, voluptatibus maiores eius iure, sunt repudiandae ab similique fugiat placeat labore aliquam quia harum necessitatibus. Odit sequi illo illum officiis quaerat aliquam quas quam et suscipit consequatur minus error cupiditate, cumque voluptatem neque enim atque fugit tempore consequuntur recusandae blanditiis laborum voluptas, dignissimos optio? Cum maiores aliquid illo modi beatae labore non recusandae quisquam quo atque perspiciatis eum praesentium esse optio, magnam natus. Labore quisquam culpa necessitatibus, maiores, voluptate esse consectetur, iusto quis quo nam nemo? Culpa, eligendi. Dolorum nulla voluptatum error adipisci fuga nesciunt cupiditate amet eaque libero. Dolorem fuga, distinctio iusto quia sed consequatur eligendi perferendis libero vitae. Id quibusdam corporis quos earum itaque mollitia neque dicta aliquid atque rem, vel nemo optio voluptatibus aliquam numquam expedita dolorem! Earum ea molestiae minima impedit voluptatum dolores quisquam libero nulla aut nisi est suscipit eos repellendus quibusdam reprehenderit, corrupti ab blanditiis adipisci reiciendis delectus quia cum nobis! Libero ipsum ea iure temporibus officiis cum excepturi, ut, non tenetur facere cumque nulla sapiente, corrupti at illum. Minima, ducimus? Suscipit quaerat, soluta modi aperiam incidunt fugit, eligendi quod veritatis laboriosam iusto commodi porro nihil nam aliquam, distinctio ipsum minima quasi quae aspernatur dolorem optio vitae reiciendis ratione consequuntur? Sapiente porro a dolorem labore quod culpa, ex eligendi dicta ullam tempore nisi aliquam incidunt odio accusamus nam nobis laborum. Nesciunt quod iure, dolorem eum totam, consectetur enim quisquam accusamus reiciendis rerum consequuntur mollitia. Sequi porro commodi vero hic maiores? Voluptatibus doloribus totam beatae hic officia, sint, dolor eveniet perferendis nostrum ullam laudantium ipsum quisquam sapiente praesentium harum asperiores? Esse incidunt ipsam ut dignissimos ad ipsum perspiciatis nobis nam quia non sit, quaerat iure quam neque vitae recusandae excepturi similique cupiditate? "
        )}
      </TaskDetail>
      <TaskDetail item={2} title="Alkohol?">
        {text("text field 2:", "Whiskey")}
      </TaskDetail>
    </>
  );
}
