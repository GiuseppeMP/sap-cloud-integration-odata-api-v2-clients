/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageStoreEntriesApi } from './MessageStoreEntriesApi';
import { TraceMessagesApi } from './TraceMessagesApi';
import { MessageProcessingLogRunsApi } from './MessageProcessingLogRunsApi';
import { MessageProcessingLogRunStepsApi } from './MessageProcessingLogRunStepsApi';
import { MessageStoreEntryAttachmentPropertiesApi } from './MessageStoreEntryAttachmentPropertiesApi';
import { MessageStoreEntryAttachmentsApi } from './MessageStoreEntryAttachmentsApi';
import { MessageStoreEntryPropertiesApi } from './MessageStoreEntryPropertiesApi';
import { MessageProcessingLogsApi } from './MessageProcessingLogsApi';
import { MessageProcessingLogAttachmentsApi } from './MessageProcessingLogAttachmentsApi';
import { TraceMessagePropertiesApi } from './TraceMessagePropertiesApi';
import { MessageProcessingLogCustomHeaderPropertiesApi } from './MessageProcessingLogCustomHeaderPropertiesApi';
import { MessageProcessingLogRunStepPropertiesApi } from './MessageProcessingLogRunStepPropertiesApi';
import { MessageProcessingLogErrorInformationsApi } from './MessageProcessingLogErrorInformationsApi';
import { MessageProcessingLogAdapterAttributesApi } from './MessageProcessingLogAdapterAttributesApi';
import { IdMapFromId2SApi } from './IdMapFromId2SApi';
import { IdMapFromIdsApi } from './IdMapFromIdsApi';
import { IdMapToIdsApi } from './IdMapToIdsApi';
import { IdempotentRepositoryEntriesApi } from './IdempotentRepositoryEntriesApi';
import { GenericIdempotentRepositoryEntriesApi } from './GenericIdempotentRepositoryEntriesApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
    defaultDeSerializers,
    DeSerializers,
    DefaultDeSerializers,
    mergeDefaultDeSerializersWith,
    Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function messageProcessingLogs<
    BinaryT = string,
    BooleanT = boolean,
    ByteT = number,
    DecimalT = BigNumber,
    DoubleT = number,
    FloatT = number,
    Int16T = number,
    Int32T = number,
    Int64T = BigNumber,
    GuidT = string,
    SByteT = number,
    SingleT = number,
    StringT = string,
    AnyT = any,
    DateTimeOffsetT = Moment,
    DateTimeT = Moment,
    TimeT = Time
>(
    deSerializers: Partial<
        DeSerializers<
            BinaryT,
            BooleanT,
            ByteT,
            DecimalT,
            DoubleT,
            FloatT,
            Int16T,
            Int32T,
            Int64T,
            GuidT,
            SByteT,
            SingleT,
            StringT,
            AnyT,
            DateTimeOffsetT,
            DateTimeT,
            TimeT
        >
    > = defaultDeSerializers as any
): MessageProcessingLogs<
    DeSerializers<
        BinaryT,
        BooleanT,
        ByteT,
        DecimalT,
        DoubleT,
        FloatT,
        Int16T,
        Int32T,
        Int64T,
        GuidT,
        SByteT,
        SingleT,
        StringT,
        AnyT,
        DateTimeOffsetT,
        DateTimeT,
        TimeT
    >
> {
    return new MessageProcessingLogs(
        mergeDefaultDeSerializersWith(deSerializers)
    );
}
class MessageProcessingLogs<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
    private apis: Record<string, any> = {};
    private deSerializers: DeSerializersT;

    constructor(deSerializers: DeSerializersT) {
        this.deSerializers = deSerializers;
    }

    private initApi(key: string, entityApi: any): any {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }

    get messageStoreEntriesApi(): MessageStoreEntriesApi<DeSerializersT> {
        const api = this.initApi('messageStoreEntriesApi', MessageStoreEntriesApi);
        const linkedApis = [
            this.initApi(
                'messageStoreEntryPropertiesApi',
                MessageStoreEntryPropertiesApi
            )
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get traceMessagesApi(): TraceMessagesApi<DeSerializersT> {
        const api = this.initApi('traceMessagesApi', TraceMessagesApi);
        const linkedApis = [
            this.initApi('traceMessagePropertiesApi', TraceMessagePropertiesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get messageProcessingLogRunsApi(): MessageProcessingLogRunsApi<DeSerializersT> {
        const api = this.initApi(
            'messageProcessingLogRunsApi',
            MessageProcessingLogRunsApi
        );
        const linkedApis = [
            this.initApi(
                'messageProcessingLogRunStepsApi',
                MessageProcessingLogRunStepsApi
            )
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get messageProcessingLogRunStepsApi(): MessageProcessingLogRunStepsApi<DeSerializersT> {
        const api = this.initApi(
            'messageProcessingLogRunStepsApi',
            MessageProcessingLogRunStepsApi
        );
        const linkedApis = [
            this.initApi(
                'messageProcessingLogRunStepPropertiesApi',
                MessageProcessingLogRunStepPropertiesApi
            ),
            this.initApi('traceMessagesApi', TraceMessagesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get messageStoreEntryAttachmentPropertiesApi(): MessageStoreEntryAttachmentPropertiesApi<DeSerializersT> {
        return this.initApi(
            'messageStoreEntryAttachmentPropertiesApi',
            MessageStoreEntryAttachmentPropertiesApi
        );
    }

    get messageStoreEntryAttachmentsApi(): MessageStoreEntryAttachmentsApi<DeSerializersT> {
        const api = this.initApi(
            'messageStoreEntryAttachmentsApi',
            MessageStoreEntryAttachmentsApi
        );
        const linkedApis = [
            this.initApi(
                'messageStoreEntryAttachmentPropertiesApi',
                MessageStoreEntryAttachmentPropertiesApi
            )
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get messageStoreEntryPropertiesApi(): MessageStoreEntryPropertiesApi<DeSerializersT> {
        return this.initApi(
            'messageStoreEntryPropertiesApi',
            MessageStoreEntryPropertiesApi
        );
    }

    get messageProcessingLogsApi(): MessageProcessingLogsApi<DeSerializersT> {
        const api = this.initApi(
            'messageProcessingLogsApi',
            MessageProcessingLogsApi
        );
        const linkedApis = [
            this.initApi(
                'messageProcessingLogCustomHeaderPropertiesApi',
                MessageProcessingLogCustomHeaderPropertiesApi
            ),
            this.initApi('messageStoreEntriesApi', MessageStoreEntriesApi),
            this.initApi(
                'messageProcessingLogErrorInformationsApi',
                MessageProcessingLogErrorInformationsApi
            ),
            this.initApi(
                'messageProcessingLogAdapterAttributesApi',
                MessageProcessingLogAdapterAttributesApi
            ),
            this.initApi(
                'messageProcessingLogAttachmentsApi',
                MessageProcessingLogAttachmentsApi
            ),
            this.initApi('messageProcessingLogRunsApi', MessageProcessingLogRunsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get messageProcessingLogAttachmentsApi(): MessageProcessingLogAttachmentsApi<DeSerializersT> {
        return this.initApi(
            'messageProcessingLogAttachmentsApi',
            MessageProcessingLogAttachmentsApi
        );
    }

    get traceMessagePropertiesApi(): TraceMessagePropertiesApi<DeSerializersT> {
        return this.initApi('traceMessagePropertiesApi', TraceMessagePropertiesApi);
    }

    get messageProcessingLogCustomHeaderPropertiesApi(): MessageProcessingLogCustomHeaderPropertiesApi<DeSerializersT> {
        const api = this.initApi(
            'messageProcessingLogCustomHeaderPropertiesApi',
            MessageProcessingLogCustomHeaderPropertiesApi
        );
        const linkedApis = [
            this.initApi('messageProcessingLogsApi', MessageProcessingLogsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get messageProcessingLogRunStepPropertiesApi(): MessageProcessingLogRunStepPropertiesApi<DeSerializersT> {
        return this.initApi(
            'messageProcessingLogRunStepPropertiesApi',
            MessageProcessingLogRunStepPropertiesApi
        );
    }

    get messageProcessingLogErrorInformationsApi(): MessageProcessingLogErrorInformationsApi<DeSerializersT> {
        return this.initApi(
            'messageProcessingLogErrorInformationsApi',
            MessageProcessingLogErrorInformationsApi
        );
    }

    get messageProcessingLogAdapterAttributesApi(): MessageProcessingLogAdapterAttributesApi<DeSerializersT> {
        const api = this.initApi(
            'messageProcessingLogAdapterAttributesApi',
            MessageProcessingLogAdapterAttributesApi
        );
        const linkedApis = [
            this.initApi('messageProcessingLogsApi', MessageProcessingLogsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get idMapFromId2SApi(): IdMapFromId2SApi<DeSerializersT> {
        const api = this.initApi('idMapFromId2SApi', IdMapFromId2SApi);
        const linkedApis = [this.initApi('idMapToIdsApi', IdMapToIdsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get idMapFromIdsApi(): IdMapFromIdsApi<DeSerializersT> {
        const api = this.initApi('idMapFromIdsApi', IdMapFromIdsApi);
        const linkedApis = [this.initApi('idMapToIdsApi', IdMapToIdsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get idMapToIdsApi(): IdMapToIdsApi<DeSerializersT> {
        const api = this.initApi('idMapToIdsApi', IdMapToIdsApi);
        const linkedApis = [
            this.initApi('idMapFromIdsApi', IdMapFromIdsApi),
            this.initApi('idMapFromId2SApi', IdMapFromId2SApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get idempotentRepositoryEntriesApi(): IdempotentRepositoryEntriesApi<DeSerializersT> {
        return this.initApi(
            'idempotentRepositoryEntriesApi',
            IdempotentRepositoryEntriesApi
        );
    }

    get genericIdempotentRepositoryEntriesApi(): GenericIdempotentRepositoryEntriesApi<DeSerializersT> {
        return this.initApi(
            'genericIdempotentRepositoryEntriesApi',
            GenericIdempotentRepositoryEntriesApi
        );
    }

    get batch(): typeof batch {
        return batch;
    }

    get changeset(): typeof changeset {
        return changeset;
    }
}
