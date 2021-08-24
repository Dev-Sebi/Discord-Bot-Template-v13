require("dotenv").config();
const { Client, CommandInteraction } = require("discord.js");
const Discord = require("discord.js");
const fetch = require('node-fetch');
const emojis = require("../../../utils/emojis");
const con = require("../../../database/connection");
const wait = require('util').promisify(setTimeout);
const moment = require('moment');

module.exports = {
    name: "ExampleMESSAGE",
    type: 3, // 2 = User Apps, 3 = Message Apps

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    execute: async (client, interaction, args) => {
        
        interaction.followUp("Message Command")

    },
};