"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analysis = void 0;
const WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Analysis {
    constructor(anayzer, outputTarget) {
        this.anayzer = anayzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithConsoleReport(team) {
        return new Analysis(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Analysis(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReports());
    }
    buildAndPrintReport(matches) {
        const report = this.anayzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Analysis = Analysis;
