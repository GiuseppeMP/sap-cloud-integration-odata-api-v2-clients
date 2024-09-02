/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageProcessingLogErrorInformations } from './MessageProcessingLogErrorInformations';
import { MessageProcessingLogErrorInformationsRequestBuilder } from './MessageProcessingLogErrorInformationsRequestBuilder';
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
export class MessageProcessingLogErrorInformationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MessageProcessingLogErrorInformations<DeSerializersT>,
      DeSerializersT
    >
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
  ): MessageProcessingLogErrorInformationsApi<DeSerializersT> {
    return new MessageProcessingLogErrorInformationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MessageProcessingLogErrorInformations;

  requestBuilder(): MessageProcessingLogErrorInformationsRequestBuilder<DeSerializersT> {
    return new MessageProcessingLogErrorInformationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MessageProcessingLogErrorInformations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessageProcessingLogErrorInformations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageProcessingLogErrorInformations<DeSerializersT>,
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
    typeof MessageProcessingLogErrorInformations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageProcessingLogErrorInformations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MESSAGE_GUID: OrderableEdmTypeField<
      MessageProcessingLogErrorInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: OrderableEdmTypeField<
      MessageProcessingLogErrorInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_ERROR_MODEL_STEP_ID: OrderableEdmTypeField<
      MessageProcessingLogErrorInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MessageProcessingLogErrorInformations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link messageGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_GUID: fieldBuilder.buildEdmTypeField(
          'MessageGuid',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
        /**
         * Static representation of the {@link lastErrorModelStepId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_ERROR_MODEL_STEP_ID: fieldBuilder.buildEdmTypeField(
          'LastErrorModelStepId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageProcessingLogErrorInformations)
      };
    }

    return this._schema;
  }
}
