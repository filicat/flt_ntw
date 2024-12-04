import { Transform, Type } from "class-transformer";
export class QbTorrent {
    addOn: number | null;
    autoTmm: number | null;
    amountLeft: number | null;
    category: string | null;
    completed: number | null;
    completionOn: number | null;
    contentPath: string | null;
    downloaded: number | null;
    infohashV1: string | null;
    infohashV2: string | null;
    lastActivity: number | null;
    magnetUri: string | null;
    name: string | null;
    numComplete: number | null;
    numIncomplete: number | null;
    numLeechs: number | null;
    numSeeds: number | null;
    priority: number | null;
    progress: number | null;
    ratio: number | null;
    savePath: string | null;
    seenComplete: number | null;
    seqDl: number | null;
    size: number | null;
    state: string | null;
    tags: string | null;
    timeActive: number | null;
    tracker: string | null;
    totalSize: number | null;
    uploaded: number | null;
    @Type(() => Date)
    addOnDate: Date;
    @Type(() => Date)
    completionOnDate: Date;

    constructor(addOn: number | null, autoTmm: number | null, amountLeft: number | null, category: string | null, completed: number | null
        , completionOn: number | null, contentPath: string | null, downloaded: number | null, infohashV1: string | null, infohashV2: string | null
        , lastActivity: number | null, magnetUri: string | null, name: string | null, numComplete: number | null, numIncomplete: number | null
        , numLeechs: number | null, numSeeds: number | null, priority: number | null, progress: number | null, ratio: number | null
        , savePath: string | null, seenComplete: number | null, seqDl: number | null, size: number | null, state: string | null, tags: string | null
        , timeActive: number | null, tracker: string | null, totalSize: number | null, uploaded: number | null, addOnDate: Date, completionOnDate: Date) {
            this.addOn = addOn;
            this.autoTmm= autoTmm;
            this.amountLeft = amountLeft;
            this.category = category;
            this.completed = completed;
            this.completionOn = completionOn;
            this.contentPath = contentPath;
            this.downloaded = downloaded;
            this.infohashV1 = infohashV1;
            this.infohashV2 = infohashV2;
            this.lastActivity = lastActivity;
            this.magnetUri = magnetUri;
            this.name = name;
            this.numComplete = numComplete;
            this.numIncomplete = numIncomplete;
            this.numLeechs = numLeechs;
            this.numSeeds = numSeeds;
            this.priority = priority;
            this.progress = progress;
            this.ratio = ratio;
            this.savePath = savePath;
            this.seenComplete = seenComplete;
            this.seqDl = seqDl;
            this.size = size;
            this.state = state;
            this.tags = tags;
            this.timeActive = timeActive;
            this.tracker = tracker;
            this.totalSize = totalSize;
            this.uploaded = uploaded;
            this.addOnDate = addOnDate;
            this.completionOnDate = completionOnDate;            
        }
}

export function printTotalSize(qbTorrent: QbTorrent): string {
//    const ts = qbTorrent.totalSize ? qbTorrent.totalSize : 0;
    return ( (qbTorrent.totalSize||0) / 1024).toFixed(2) + 'GB';
}
export function printProgress(qbTorrent: QbTorrent): string {
    const ts = qbTorrent.progress ? qbTorrent.progress : 0;
    return (ts * 100).toFixed(1) + '%';
}

export class TorrentFile {
    availability: number | null;
    index: number | null;
    isSeed: boolean | null;
    name: string | null;
    priority: number | null;
    progress: number | null;
    size: number | null;

    constructor(
        availability: number | null = null,
        index: number | null = null,
        isSeed: boolean | null = null,
        name: string | null = null,
        priority: number | null = null,
        progress: number | null = null,
        size: number | null = null
    ) {
        this.availability = availability;
        this.index = index;
        this.isSeed = isSeed;
        this.name = name;
        this.priority = priority;
        this.progress = progress;
        this.size = size;
    }
}
