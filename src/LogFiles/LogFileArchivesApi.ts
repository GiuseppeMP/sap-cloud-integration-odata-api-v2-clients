/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LogFileArchives } from './LogFileArchives';
import { LogFileArchivesRequestBuilder } from './LogFileArchivesRequestBuilder';
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
export class LogFileArchivesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LogFileArchives<DeSerializersT>, DeSerializersT>
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
  ): LogFileArchivesApi<DeSerializersT> {
    return new LogFileArchivesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LogFileArchives;

  requestBuilder(): LogFileArchivesRequestBuilder<DeSerializersT> {
    return new LogFileArchivesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LogFileArchives<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LogFileArchives<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LogFileArchives<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LogFileArchives, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LogFileArchives,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SCOPE: OrderableEdmTypeField<
      LogFileArchives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOG_FILE_TYPE: OrderableEdmTypeField<
      LogFileArchives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NODE_SCOPE: OrderableEdmTypeField<
      LogFileArchives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTENT_TYPE: OrderableEdmTypeField<
      LogFileArchives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LogFileArchives<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link scope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE: fieldBuilder.buildEdmTypeField('Scope', 'Edm.String', false),
        /**
         * Static representation of the {@link logFileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_FILE_TYPE: fieldBuilder.buildEdmTypeField(
          'LogFileType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nodeScope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NODE_SCOPE: fieldBuilder.buildEdmTypeField(
          'NodeScope',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link contentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ContentType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LogFileArchives)
      };
    }

    return this._schema;
  }
}
