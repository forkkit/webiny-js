// @flow
export type SiteDataType = {
    id: string,
    region: string,
    uploadsFolder: {
        bucket: string,
        paths: {
            relative: string,
            absolute: string
        }
    }
};

export type UploadFileParamsType = {
    site: SiteDataType,
    file: Object
};

export type DownloadFileParamsType = {
    site: SiteDataType,
    file: {
        path: string
    }
};

export type DownloadFileProcessorReturnType = {
    src: string,
    contentType: string
};

export type DownloadFileProcessorType = {
    canProcess: Object => boolean,
    process: Object => Promise<DownloadFileProcessorReturnType>
};

export type DownloadFileResponseType = {
    code: "FILE_FOUND",
    data: DownloadFileProcessorReturnType
};

export type DownloadFileErrorResponseType = {
    code: "FILE_NOT_FOUND",
    data: Object
};
