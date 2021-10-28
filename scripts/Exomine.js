//Enables mineral purchase button event and exports html to be displayed
import {governorChoice} from "./Governors.js"
import { colonyMinerals } from "./ColonyMin.js"
import { facilityChoice } from "./Facilities.js"
import { colonynameHTML } from "./Colonies.js"


export const Exomine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>

        <article class="choices">
            <section class="choices__governor options">
                <h2>Choose a governor</h2>
                ${governorChoice()}
            </section>
            <aside>
                <section class="colony__resources">
                ${colonynameHTML()}
                </section>
            </aside>
        </article>
        <div class="facilty">
            <article class="choices">
                <section class="choices__facility options">
                    <h2>Facility</h2>
                    ${facilityChoice()}
                </section>
            </article>
            </div>
        <article class="minCart">
            <section class="facility__resources">
                <h2>Minerals at Facility</h2>
            </section>       
            <aside>
                <section class="cart">
                    <h3>Cart</h3>
                    <button type="submit">Purchase Minerals</button>
                </section>
            </aside>
        </article>

       
    `
}
