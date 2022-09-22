import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { MatchData } from "./MatchData";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReports } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Analysis {
  static winsAnalysisWithConsoleReport(team: string): Analysis {
    return new Analysis(new WinsAnalysis(team), new ConsoleReport());
  }

  static winsAnalysisWithHtmlReport(team: string): Analysis {
    return new Analysis(new WinsAnalysis(team), new HtmlReports());
  }
  constructor(public anayzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.anayzer.run(matches);
    this.outputTarget.print(report);
  }
}
