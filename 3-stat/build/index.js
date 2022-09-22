"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
const consoleReport = Summary_1.Analysis.winsAnalysisWithConsoleReport("Man United");
consoleReport.buildAndPrintReport(matchReader.matches);
const htmlReport = Summary_1.Analysis.winsAnalysisWithHtmlReport("Man United");
htmlReport.buildAndPrintReport(matchReader.matches);