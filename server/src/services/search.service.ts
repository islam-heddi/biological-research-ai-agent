import { CronJob } from "cron";
import { getDataFromBiorxiv } from "../apis/biorxiv.api.js";
import type { BiorxivSchema } from "../types/api.types.js";
import { Research } from "../model/research.js";
import { checkExistingResearch } from "../utils/helperSearch.js";

const cronjob = (() => {
    const job = new CronJob(
	'0 0 */7 * *', // cronTime Each 7 days
	async function () {
        const data: BiorxivSchema = await getDataFromBiorxiv()
		data.collection.forEach(async (value) => {
            const checkExisting = await checkExistingResearch(value.title);
            if(!checkExisting){
                Research.create({
                    name: value.title,
                    url: "",
                    authors: value.authors,
                    abstractResearch: value.abstract,
                    dateResearch: value.date
                })
            }
        })
	}, // onTick
	null, // onComplete
	true, // start
	'Algeria/algiers' // timeZone
    );
    return job;
})()

export {
    cronjob
}