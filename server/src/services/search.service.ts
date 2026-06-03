import { CronJob } from "cron";
import { getDataFromBiorxiv } from "../apis/biorxiv.api.js";
import type { BiorxivSchema } from "../types/api.types.js";
import { Research } from "../model/research.js";
import { checkExistingResearch } from "../utils/helperSearch.js";

const cronjobResearch = new CronJob(
	'0 0 */7 * *', // cronTime Each 7 days
	async function () {
        console.log("starting collecting the data............");
        const data: BiorxivSchema = await getDataFromBiorxiv()
		data.collection.forEach(async (value) => {
            try{
                const checkExisting = await checkExistingResearch(value.title);
                if(!checkExisting){
                    await Research.create({
                        name: value.title,
                        url: "",
                        authors: value.authors,
                        abstractResearch: value.abstract,
                        dateResearch: value.date
                    })
                }
            }catch(error){
                console.log(error)
            }
        })
	}, // onTick
	null, // onComplete
	true, // start
	'America/Los_Angeles' // timeZone
    );
    

export {
    cronjobResearch
}