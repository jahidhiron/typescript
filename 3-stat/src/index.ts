import { MatchReader } from "./MatchReader";
import { Analysis } from "./Analysis";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const consoleReport = Analysis.winsAnalysisWithConsoleReport("Man United");
consoleReport.buildAndPrintReport(matchReader.matches);

const htmlReport = Analysis.winsAnalysisWithHtmlReport("Chelsea");
htmlReport.buildAndPrintReport(matchReader.matches);
