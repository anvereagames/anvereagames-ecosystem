export class AgentMemory {

  private history: string[] = [];

  save(data: string) {
    this.history.push(data);
  }

  getHistory() {
    return this.history;
  }

}
