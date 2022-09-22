import { MatchReader } from "./MatchReader";
import { Analysis } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const consoleReport = Analysis.winsAnalysisWithConsoleReport("Man United");
consoleReport.buildAndPrintReport(matchReader.matches);

const htmlReport = Analysis.winsAnalysisWithHtmlReport("Man United");
htmlReport.buildAndPrintReport(matchReader.matches);
