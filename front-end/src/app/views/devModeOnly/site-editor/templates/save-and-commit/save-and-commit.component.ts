import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'save-and-commit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './save-and-commit.component.html',
  styleUrls: ['./save-and-commit.component.scss'],
})
export class SaveAndCommitComponent implements OnInit {

  steps: string[] = [
    'Step 1: Verify Changed Files',
    'Step 2: Run Build',
    'Step 3: Commit Changes',
    'Step 4: Deploy',
  ];
  commands:string[] = [
    'git diff --name-only',
    'cd front-end && npm run build',
    'git add docs/ && git add . && git commit -m',
    'git push'
  ]

  stepsSuccess:boolean[] = [false,false,false,false]
  nextStepIndex = 0;
  isBuildAndSaveInProgress = false;
  isSaveSuccessful = false;
  isCommitEnabled = false;
  filesChanged = null;
  nextStepToRun:string = 'git diff --name-only';
  commitMessage = null;

  constructor(private httpService: HttpService, private modalService: NgbModal) {}

  openModal(content: any): void {
    this.modalService.open(content,{size:"xl"});
  }

  ngOnInit(): void {}

   updateNextStepIndex():void {
    if(this.stepsSuccess.findIndex(f => f === false)){
      this.nextStepIndex++
      this.nextStepToRun = this.commands[this.nextStepIndex];
    }
    else{
      this.isCommitEnabled = true;
    }
  }


  gitDiff: { line: string, type: string }[] = [];


  runCMDCommand(): void {
    this.isBuildAndSaveInProgress = true;
    if(this.nextStepIndex == 2){
      if(this.commitMessage==null || typeof(this.commitMessage)!='string' || String(this.commitMessage).trim().length<=0){
        alert("Empty commit message is not allowed")
        return
      }
      this.nextStepToRun += this.commitMessage;
    }
    this.httpService
      .post('/run-git-command', {
        command: this.nextStepToRun,
      })
      .subscribe(
        (data) => {
          this.filesChanged = data.data.filesChanged;
          this.isSaveSuccessful = true;
          this.isBuildAndSaveInProgress = false;
          this.stepsSuccess[this.nextStepIndex]  = true;
          this.updateNextStepIndex()
        },
        (error) => {
          console.error('Error in api!', error);
          this.isBuildAndSaveInProgress = false;
          this.commitMessage=null
        }
      );
  }

  showModifiedLines(filePath: string, content: any): void {
    this.httpService
      .post('/run-git-command', {
        command: 'git diff ' + filePath,
      })
      .subscribe(
        (data) => {
          this.gitDiff = this.getProcessedDiff(data.data.filesChanged);
          this.openModal(content);
        },
        (error) => {
          console.error('Error saving paper!', error);
        }
      );
  }

  cleanGitDiff(gitDiff: string[]): string[] {
    return gitDiff.filter(line => !line.includes('Binary files')).join('\n').split('\n');
  }

  getProcessedDiff(gitDiff: any): { line: string, type: string }[] {
    const cleanedDiff = this.cleanGitDiff(gitDiff);
    const processedLines: { line: string, type: string }[] = [];

    for (let line of cleanedDiff) {
      if (line == undefined || line == null || typeof(line) !== 'string') continue;

      if (line.startsWith('-') && !line.startsWith('---') ) {
        processedLines.push({ line, type: 'deleted' });
      } else if (line.startsWith('+') && !line.startsWith('+++')) {
        processedLines.push({ line, type: 'added' });
      } else if (line.startsWith('diff --git') || line.startsWith('index') || line.startsWith('+++') || line.startsWith('---')) {
        processedLines.push({ line, type: 'info' });
      } else if (line.includes('rename')) {
        processedLines.push({ line, type: 'renamed' });
      } else {
        processedLines.push({ line, type: 'normal' });
      }
    }
    return processedLines;
  }


  // Function to handle Commit and Deploy operation
  commitAndDeploy(): void {
    // Call your commit and deploy logic here, using the HttpService
    console.log('Committing and Deploying...');

    // Simulate the commit and deploy process
    setTimeout(() => {
      alert('Commit and Deploy Successful!');
    }, 2000);
  }

  toString(val:any){
    return String(val);
  }
}
