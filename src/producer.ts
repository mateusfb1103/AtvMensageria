import { Queue } from "bullmq";
import { redisConfig } from "./config/redis";

const queue = new Queue("types", { connection: redisConfig });

async function addTypes() {
    await queue.add("scrum_master", { name: "Mateus", department: "IT" });
    await queue.add("manager", { name: "Felipe", department: "HR" });
    await queue.add("product_owner", { name: "Pedro", department: "IT" });
}

addTypes();