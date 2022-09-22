import fs from "fs";

import { OutputTarget } from "../Analysis";

export class HtmlReports implements OutputTarget {
  print(report: string): void {
    const html = `
            <div>
                <h3>Analyis Output</h3>
                <div>${report}</div>
            </div>
        `;

    fs.writeFileSync("report.html", html);
  }
}
