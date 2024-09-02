/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageProcessingLogAttachments } from './MessageProcessingLogAttachments';
import { MessageProcessingLogAttachmentsRequestBuilder } from './MessageProcessingLogAttachmentsRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class MessageProcessingLogAttachmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MessageProcessingLogAttachments<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MessageProcessingLogAttachmentsApi<DeSerializersT> {
    return new MessageProcessingLogAttachmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MessageProcessingLogAttachments;

  requestBuilder(): MessageProcessingLogAttachmentsRequestBuilder<DeSerializersT> {
    return new MessageProcessingLogAttachmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MessageProcessingLogAttachments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessageProcessingLogAttachments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageProcessingLogAttachments<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MessageProcessingLogAttachments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageProcessingLogAttachments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MessageProcessingLogAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_GUID: OrderableEdmTypeField<
      MessageProcessingLogAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_STAMP: OrderableEdmTypeField<
      MessageProcessingLogAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      MessageProcessingLogAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTENT_TYPE: OrderableEdmTypeField<
      MessageProcessingLogAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYLOAD_SIZE: OrderableEdmTypeField<
      MessageProcessingLogAttachments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MessageProcessingLogAttachments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link messageGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_GUID: fieldBuilder.buildEdmTypeField(
          'MessageGuid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeStamp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_STAMP: fieldBuilder.buildEdmTypeField(
          'TimeStamp',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link contentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ContentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payloadSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYLOAD_SIZE: fieldBuilder.buildEdmTypeField(
          'PayloadSize',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageProcessingLogAttachments)
      };
    }

    return this._schema;
  }
}
